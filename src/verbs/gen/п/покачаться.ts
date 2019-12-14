import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const покачаться: PerfectVerb = {
  name: Word('покачаться', 5),
  singular1stPerson: Word('покачаюсь', 5),
  singular2ndPerson: Word('покачаешься', 5),
  singular3rdPerson: Word('покачается', 5),
  plural1stPerson: Word('покачаемся', 5),
  plural2ndPerson: Word('покачаетесь', 5),
  plural3rdPerson: Word('покачаются', 5),
  masculinePast: Word('покачался', 5),
  femininePast: Word('покачалась', 5),
  neuterPast: Word('покачалось', 5),
  pluralPast: Word('покачались', 5),
  imperativeInformal: Word('покачайся', 5),
  imperativeFormal: Word('покачайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(покачаться.name.text, покачаться);

export { покачаться };