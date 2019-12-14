import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выстоять: PerfectVerb = {
  name: Word('выстоять', 1),
  singular1stPerson: Word('выстою', 1),
  singular2ndPerson: Word('выстоишь', 1),
  singular3rdPerson: Word('выстоит', 1),
  plural1stPerson: Word('выстоим', 1),
  plural2ndPerson: Word('выстоите', 1),
  plural3rdPerson: Word('выстоят', 1),
  masculinePast: Word('выстоял', 1),
  femininePast: Word('выстояла', 1),
  neuterPast: Word('выстояло', 1),
  pluralPast: Word('выстояли', 1),
  imperativeInformal: Word('выстоь', 1),
  imperativeFormal: Word('выстоьте', 1),
  imperfect: ['выстаивать'],
};

perfectVerbs.set(выстоять.name.text, выстоять);

export { выстоять };