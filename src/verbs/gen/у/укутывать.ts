import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const укутывать: PerfectVerb = {
  name: Word('укутывать', 2),
  singular1stPerson: Word('укутываю', 2),
  singular2ndPerson: Word('укутываешь', 2),
  singular3rdPerson: Word('укутывает', 2),
  plural1stPerson: Word('укутываем', 2),
  plural2ndPerson: Word('укутываете', 2),
  plural3rdPerson: Word('укутывают', 2),
  masculinePast: Word('укутывал', 2),
  femininePast: Word('укутывала', 2),
  neuterPast: Word('укутывало', 2),
  pluralPast: Word('укутывали', 2),
  imperativeInformal: Word('укутывай', 2),
  imperativeFormal: Word('укутывайте', 2),
  imperfect: [],
};

perfectVerbs.set(укутывать.name.text, укутывать);

export { укутывать };