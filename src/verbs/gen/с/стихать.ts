import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стихать: PerfectVerb = {
  name: Word('стихать', 4),
  singular1stPerson: Word('стихаю', 4),
  singular2ndPerson: Word('стихаешь', 4),
  singular3rdPerson: Word('стихает', 4),
  plural1stPerson: Word('стихаем', 4),
  plural2ndPerson: Word('стихаете', 4),
  plural3rdPerson: Word('стихают', 4),
  masculinePast: Word('стихал', 4),
  femininePast: Word('стихала', 4),
  neuterPast: Word('стихало', 4),
  pluralPast: Word('стихали', 4),
  imperativeInformal: Word('стихай', 4),
  imperativeFormal: Word('стихайте', 4),
  imperfect: [],
};

perfectVerbs.set(стихать.name.text, стихать);

export { стихать };