import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const открутить: PerfectVerb = {
  name: Word('открутить', 6),
  singular1stPerson: Word('откручу', 6),
  singular2ndPerson: Word('открутишь', 4),
  singular3rdPerson: Word('открутит', 4),
  plural1stPerson: Word('открутим', 4),
  plural2ndPerson: Word('открутите', 4),
  plural3rdPerson: Word('открутят', 4),
  masculinePast: Word('открутил', 6),
  femininePast: Word('открутила', 6),
  neuterPast: Word('открутило', 6),
  pluralPast: Word('открутили', 6),
  imperativeInformal: Word('открути', 6),
  imperativeFormal: Word('открутите', 6),
  imperfect: [],
};

perfectVerbs.set(открутить.name.text, открутить);

export { открутить };