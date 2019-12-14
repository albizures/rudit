import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const начихать: PerfectVerb = {
  name: Word('начихать', 5),
  singular1stPerson: Word('начихаю', 5),
  singular2ndPerson: Word('начихаешь', 5),
  singular3rdPerson: Word('начихает', 5),
  plural1stPerson: Word('начихаем', 5),
  plural2ndPerson: Word('начихаете', 5),
  plural3rdPerson: Word('начихают', 5),
  masculinePast: Word('начихал', 5),
  femininePast: Word('начихала', 5),
  neuterPast: Word('начихало', 5),
  pluralPast: Word('начихали', 5),
  imperativeInformal: Word('начихай', 5),
  imperativeFormal: Word('начихайте', 5),
  imperfect: [],
};

perfectVerbs.set(начихать.name.text, начихать);

export { начихать };