import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const научить: PerfectVerb = {
  name: Word('научить', 4),
  singular1stPerson: Word('научу', 4),
  singular2ndPerson: Word('научишь', 2),
  singular3rdPerson: Word('научит', 2),
  plural1stPerson: Word('научим', 2),
  plural2ndPerson: Word('научите', 2),
  plural3rdPerson: Word('научат', 2),
  masculinePast: Word('научил', 4),
  femininePast: Word('научила', 4),
  neuterPast: Word('научило', 4),
  pluralPast: Word('научили', 4),
  imperativeInformal: Word('научи', 4),
  imperativeFormal: Word('научите', 4),
  imperfect: ['учить'],
};

perfectVerbs.set(научить.name.text, научить);

export { научить };