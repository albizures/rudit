import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поморосить: PerfectVerb = {
  name: Word('поморосить', 7),
  singular1stPerson: Word('поморошу', 7),
  singular2ndPerson: Word('поморосишь', 7),
  singular3rdPerson: Word('поморосит', 7),
  plural1stPerson: Word('поморосим', 7),
  plural2ndPerson: Word('поморосите', 7),
  plural3rdPerson: Word('поморосят', 7),
  masculinePast: Word('поморосил', 7),
  femininePast: Word('поморосила', 7),
  neuterPast: Word('поморосило', 7),
  pluralPast: Word('поморосили', 7),
  imperativeInformal: Word('помороси', 7),
  imperativeFormal: Word('поморосите', 7),
  imperfect: [],
};

perfectVerbs.set(поморосить.name.text, поморосить);

export { поморосить };