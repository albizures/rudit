import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const показаться: PerfectVerb = {
  name: Word('показаться', 5),
  singular1stPerson: Word('покажусь', 5),
  singular2ndPerson: Word('покажешься', 3),
  singular3rdPerson: Word('покажется', 3),
  plural1stPerson: Word('покажемся', 3),
  plural2ndPerson: Word('покажетесь', 3),
  plural3rdPerson: Word('покажутся', 3),
  masculinePast: Word('показался', 5),
  femininePast: Word('показалась', 5),
  neuterPast: Word('показалось', 5),
  pluralPast: Word('показались', 5),
  imperativeInformal: Word('покажись', 5),
  imperativeFormal: Word('покажитесь', 5),
  imperfect: ['казаться','показываться'],
};

perfectVerbs.set(показаться.name.text, показаться);

export { показаться };