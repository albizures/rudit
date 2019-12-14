import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const считывать: PerfectVerb = {
  name: Word('считывать', 2),
  singular1stPerson: Word('считываю', 2),
  singular2ndPerson: Word('считываешь', 2),
  singular3rdPerson: Word('считывает', 2),
  plural1stPerson: Word('считываем', 2),
  plural2ndPerson: Word('считываете', 2),
  plural3rdPerson: Word('считывают', 2),
  masculinePast: Word('считывал', 2),
  femininePast: Word('считывала', 2),
  neuterPast: Word('считывало', 2),
  pluralPast: Word('считывали', 2),
  imperativeInformal: Word('считывай', 2),
  imperativeFormal: Word('считывайте', 2),
  imperfect: [],
};

perfectVerbs.set(считывать.name.text, считывать);

export { считывать };