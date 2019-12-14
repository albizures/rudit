import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const увлекаться: PerfectVerb = {
  name: Word('увлекаться', 5),
  singular1stPerson: Word('увлекаюсь', 5),
  singular2ndPerson: Word('увлекаешься', 5),
  singular3rdPerson: Word('увлекается', 5),
  plural1stPerson: Word('увлекаемся', 5),
  plural2ndPerson: Word('увлекаетесь', 5),
  plural3rdPerson: Word('увлекаются', 5),
  masculinePast: Word('увлекался', 5),
  femininePast: Word('увлекалась', 5),
  neuterPast: Word('увлекалось', 5),
  pluralPast: Word('увлекались', 5),
  imperativeInformal: Word('увлекайся', 5),
  imperativeFormal: Word('увлекайтесь', 5),
  imperfect: ['увлечься'],
};

perfectVerbs.set(увлекаться.name.text, увлекаться);

export { увлекаться };