import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const предстоять: PerfectVerb = {
  name: Word('предстоять', 7),
  singular1stPerson: Word('предстою', 7),
  singular2ndPerson: Word('предстоишь', 7),
  singular3rdPerson: Word('предстоит', 7),
  plural1stPerson: Word('предстоим', 7),
  plural2ndPerson: Word('предстоите', 7),
  plural3rdPerson: Word('предстоят', 7),
  masculinePast: Word('предстоял', 7),
  femininePast: Word('предстояла', 7),
  neuterPast: Word('предстояло', 7),
  pluralPast: Word('предстояли', 7),
  imperativeInformal: Word('предстой', 6),
  imperativeFormal: Word('предстойте', 6),
  imperfect: [],
};

perfectVerbs.set(предстоять.name.text, предстоять);

export { предстоять };