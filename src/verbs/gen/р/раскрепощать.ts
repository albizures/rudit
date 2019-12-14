import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раскрепощать: PerfectVerb = {
  name: Word('раскрепощать', 9),
  singular1stPerson: Word('раскрепощаю', 9),
  singular2ndPerson: Word('раскрепощаешь', 9),
  singular3rdPerson: Word('раскрепощает', 9),
  plural1stPerson: Word('раскрепощаем', 9),
  plural2ndPerson: Word('раскрепощаете', 9),
  plural3rdPerson: Word('раскрепощают', 9),
  masculinePast: Word('раскрепощал', 9),
  femininePast: Word('раскрепощала', 9),
  neuterPast: Word('раскрепощало', 9),
  pluralPast: Word('раскрепощали', 9),
  imperativeInformal: Word('раскрепощай', 9),
  imperativeFormal: Word('раскрепощайте', 9),
  imperfect: [],
};

perfectVerbs.set(раскрепощать.name.text, раскрепощать);

export { раскрепощать };