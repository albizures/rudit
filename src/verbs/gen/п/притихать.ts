import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const притихать: PerfectVerb = {
  name: Word('притихать', 6),
  singular1stPerson: Word('притихаю', 6),
  singular2ndPerson: Word('притихаешь', 6),
  singular3rdPerson: Word('притихает', 6),
  plural1stPerson: Word('притихаем', 6),
  plural2ndPerson: Word('притихаете', 6),
  plural3rdPerson: Word('притихают', 6),
  masculinePast: Word('притихал', 6),
  femininePast: Word('притихала', 6),
  neuterPast: Word('притихало', 6),
  pluralPast: Word('притихали', 6),
  imperativeInformal: Word('притихай', 6),
  imperativeFormal: Word('притихайте', 6),
  imperfect: [],
};

perfectVerbs.set(притихать.name.text, притихать);

export { притихать };