import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заштопывать: PerfectVerb = {
  name: Word('заштопывать', 4),
  singular1stPerson: Word('заштопываю', 4),
  singular2ndPerson: Word('заштопываешь', 4),
  singular3rdPerson: Word('заштопывает', 4),
  plural1stPerson: Word('заштопываем', 4),
  plural2ndPerson: Word('заштопываете', 4),
  plural3rdPerson: Word('заштопывают', 4),
  masculinePast: Word('заштопывал', 4),
  femininePast: Word('заштопывала', 4),
  neuterPast: Word('заштопывало', 4),
  pluralPast: Word('заштопывали', 4),
  imperativeInformal: Word('заштопывай', 4),
  imperativeFormal: Word('заштопывайте', 4),
  imperfect: [],
};

perfectVerbs.set(заштопывать.name.text, заштопывать);

export { заштопывать };