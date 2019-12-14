import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обняться: PerfectVerb = {
  name: Word('обняться', 3),
  singular1stPerson: Word('обнимусь', 5),
  singular2ndPerson: Word('обнимешься', 3),
  singular3rdPerson: Word('обнимется', 3),
  plural1stPerson: Word('обнимемся', 3),
  plural2ndPerson: Word('обниметесь', 3),
  plural3rdPerson: Word('обнимутся', 3),
  masculinePast: Word('обнялся,обня'лся', 0),
  femininePast: Word('обнялась', 5),
  neuterPast: Word('обнялось,обня'лось', 0),
  pluralPast: Word('обнялись,обня'лись', 0),
  imperativeInformal: Word('обнимись', 5),
  imperativeFormal: Word('обнимитесь', 5),
  imperfect: ['обниматься'],
};

perfectVerbs.set(обняться.name.text, обняться);

export { обняться };