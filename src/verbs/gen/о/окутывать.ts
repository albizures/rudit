import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const окутывать: PerfectVerb = {
  name: Word('окутывать', 2),
  singular1stPerson: Word('окутываю', 2),
  singular2ndPerson: Word('окутываешь', 2),
  singular3rdPerson: Word('окутывает', 2),
  plural1stPerson: Word('окутываем', 2),
  plural2ndPerson: Word('окутываете', 2),
  plural3rdPerson: Word('окутывают', 2),
  masculinePast: Word('окутывал', 2),
  femininePast: Word('окутывала', 2),
  neuterPast: Word('окутывало', 2),
  pluralPast: Word('окутывали', 2),
  imperativeInformal: Word('окутывай', 2),
  imperativeFormal: Word('окутывайте', 2),
  imperfect: [],
};

perfectVerbs.set(окутывать.name.text, окутывать);

export { окутывать };