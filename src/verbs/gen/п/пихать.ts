import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пихать: PerfectVerb = {
  name: Word('пихать', 3),
  singular1stPerson: Word('пихаю', 3),
  singular2ndPerson: Word('пихаешь', 3),
  singular3rdPerson: Word('пихает', 3),
  plural1stPerson: Word('пихаем', 3),
  plural2ndPerson: Word('пихаете', 3),
  plural3rdPerson: Word('пихают', 3),
  masculinePast: Word('пихал', 3),
  femininePast: Word('пихала', 3),
  neuterPast: Word('пихало', 3),
  pluralPast: Word('пихали', 3),
  imperativeInformal: Word('пихай', 3),
  imperativeFormal: Word('пихайте', 3),
  imperfect: [],
};

perfectVerbs.set(пихать.name.text, пихать);

export { пихать };