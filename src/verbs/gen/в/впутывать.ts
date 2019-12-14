import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const впутывать: PerfectVerb = {
  name: Word('впутывать', 2),
  singular1stPerson: Word('впутываю', 2),
  singular2ndPerson: Word('впутываешь', 2),
  singular3rdPerson: Word('впутывает', 2),
  plural1stPerson: Word('впутываем', 2),
  plural2ndPerson: Word('впутываете', 2),
  plural3rdPerson: Word('впутывают', 2),
  masculinePast: Word('впутывал', 2),
  femininePast: Word('впутывала', 2),
  neuterPast: Word('впутывало', 2),
  pluralPast: Word('впутывали', 2),
  imperativeInformal: Word('впутывай', 2),
  imperativeFormal: Word('впутывайте', 2),
  imperfect: [],
};

perfectVerbs.set(впутывать.name.text, впутывать);

export { впутывать };