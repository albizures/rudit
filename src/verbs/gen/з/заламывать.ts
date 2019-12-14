import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заламывать: PerfectVerb = {
  name: Word('заламывать', 3),
  singular1stPerson: Word('заламываю', 3),
  singular2ndPerson: Word('заламываешь', 3),
  singular3rdPerson: Word('заламывает', 3),
  plural1stPerson: Word('заламываем', 3),
  plural2ndPerson: Word('заламываете', 3),
  plural3rdPerson: Word('заламывают', 3),
  masculinePast: Word('заламывал', 3),
  femininePast: Word('заламывала', 3),
  neuterPast: Word('заламывало', 3),
  pluralPast: Word('заламывали', 3),
  imperativeInformal: Word('заламывай', 3),
  imperativeFormal: Word('заламывайте', 3),
  imperfect: ['заломить'],
};

perfectVerbs.set(заламывать.name.text, заламывать);

export { заламывать };