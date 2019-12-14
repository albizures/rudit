import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const истощать: PerfectVerb = {
  name: Word('истощать', 5),
  singular1stPerson: Word('истощаю', 5),
  singular2ndPerson: Word('истощаешь', 5),
  singular3rdPerson: Word('истощает', 5),
  plural1stPerson: Word('истощаем', 5),
  plural2ndPerson: Word('истощаете', 5),
  plural3rdPerson: Word('истощают', 5),
  masculinePast: Word('истощал', 5),
  femininePast: Word('истощала', 5),
  neuterPast: Word('истощало', 5),
  pluralPast: Word('истощали', 5),
  imperativeInformal: Word('истощай', 5),
  imperativeFormal: Word('истощайте', 5),
  imperfect: [],
};

perfectVerbs.set(истощать.name.text, истощать);

export { истощать };