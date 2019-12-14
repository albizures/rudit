import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пренебречь: PerfectVerb = {
  name: Word('пренебречь', 7),
  singular1stPerson: Word('пренебрегу', 9),
  singular2ndPerson: Word('пренебрежёшь', 9),
  singular3rdPerson: Word('пренебрежёт', 9),
  plural1stPerson: Word('пренебрежём', 9),
  plural2ndPerson: Word('пренебрежёте', 9),
  plural3rdPerson: Word('пренебрегут', 9),
  masculinePast: Word('пренебрёг', 7),
  femininePast: Word('пренебрегла', 10),
  neuterPast: Word('пренебрегло', 10),
  pluralPast: Word('пренебрегли', 10),
  imperativeInformal: Word('пренебреги', 9),
  imperativeFormal: Word('пренебрегите', 9),
  imperfect: ['пренебрегать'],
};

perfectVerbs.set(пренебречь.name.text, пренебречь);

export { пренебречь };