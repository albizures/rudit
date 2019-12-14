import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заутюживать: PerfectVerb = {
  name: Word('заутюживать', 4),
  singular1stPerson: Word('заутюживаю', 4),
  singular2ndPerson: Word('заутюживаешь', 4),
  singular3rdPerson: Word('заутюживает', 4),
  plural1stPerson: Word('заутюживаем', 4),
  plural2ndPerson: Word('заутюживаете', 4),
  plural3rdPerson: Word('заутюживают', 4),
  masculinePast: Word('заутюживал', 4),
  femininePast: Word('заутюживала', 4),
  neuterPast: Word('заутюживало', 4),
  pluralPast: Word('заутюживали', 4),
  imperativeInformal: Word('заутюживай', 4),
  imperativeFormal: Word('заутюживайте', 4),
  imperfect: [],
};

perfectVerbs.set(заутюживать.name.text, заутюживать);

export { заутюживать };