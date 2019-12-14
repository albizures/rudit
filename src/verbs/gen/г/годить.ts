import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const годить: PerfectVerb = {
  name: Word('годить', 3),
  singular1stPerson: Word('гожу', 3),
  singular2ndPerson: Word('годишь', 3),
  singular3rdPerson: Word('годит', 3),
  plural1stPerson: Word('годим', 3),
  plural2ndPerson: Word('годите', 3),
  plural3rdPerson: Word('годят', 3),
  masculinePast: Word('годил', 3),
  femininePast: Word('годила', 3),
  neuterPast: Word('годило', 3),
  pluralPast: Word('годили', 3),
  imperativeInformal: Word('годи', 3),
  imperativeFormal: Word('годите', 3),
  imperfect: [],
};

perfectVerbs.set(годить.name.text, годить);

export { годить };