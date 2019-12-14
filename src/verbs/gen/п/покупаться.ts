import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const покупаться: PerfectVerb = {
  name: Word('покупаться', 5),
  singular1stPerson: Word('покупаюсь', 5),
  singular2ndPerson: Word('покупаешься', 5),
  singular3rdPerson: Word('покупается', 5),
  plural1stPerson: Word('покупаемся', 5),
  plural2ndPerson: Word('покупаетесь', 5),
  plural3rdPerson: Word('покупаются', 5),
  masculinePast: Word('покупался', 5),
  femininePast: Word('покупалась', 5),
  neuterPast: Word('покупалось', 5),
  pluralPast: Word('покупались', 5),
  imperativeInformal: Word('покупайся', 5),
  imperativeFormal: Word('покупайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(покупаться.name.text, покупаться);

export { покупаться };