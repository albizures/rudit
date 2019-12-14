import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наградить: PerfectVerb = {
  name: Word('наградить', 6),
  singular1stPerson: Word('награжу', 6),
  singular2ndPerson: Word('наградишь', 6),
  singular3rdPerson: Word('наградит', 6),
  plural1stPerson: Word('наградим', 6),
  plural2ndPerson: Word('наградите', 6),
  plural3rdPerson: Word('наградят', 6),
  masculinePast: Word('наградил', 6),
  femininePast: Word('наградила', 6),
  neuterPast: Word('наградило', 6),
  pluralPast: Word('наградили', 6),
  imperativeInformal: Word('награди', 6),
  imperativeFormal: Word('наградите', 6),
  imperfect: [],
};

perfectVerbs.set(наградить.name.text, наградить);

export { наградить };