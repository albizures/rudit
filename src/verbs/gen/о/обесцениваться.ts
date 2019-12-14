import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обесцениваться: PerfectVerb = {
  name: Word('обесцениваться', 5),
  singular1stPerson: Word('обесцениваюсь', 5),
  singular2ndPerson: Word('обесцениваешься', 5),
  singular3rdPerson: Word('обесценивается', 5),
  plural1stPerson: Word('обесцениваемся', 5),
  plural2ndPerson: Word('обесцениваетесь', 5),
  plural3rdPerson: Word('обесцениваются', 5),
  masculinePast: Word('обесценивался', 5),
  femininePast: Word('обесценивалась', 5),
  neuterPast: Word('обесценивалось', 5),
  pluralPast: Word('обесценивались', 5),
  imperativeInformal: Word('обесценивайся', 5),
  imperativeFormal: Word('обесценивайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(обесцениваться.name.text, обесцениваться);

export { обесцениваться };