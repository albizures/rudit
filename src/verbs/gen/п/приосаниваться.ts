import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приосаниваться: PerfectVerb = {
  name: Word('приосаниваться', 5),
  singular1stPerson: Word('приосаниваюсь', 5),
  singular2ndPerson: Word('приосаниваешься', 5),
  singular3rdPerson: Word('приосанивается', 5),
  plural1stPerson: Word('приосаниваемся', 5),
  plural2ndPerson: Word('приосаниваетесь', 5),
  plural3rdPerson: Word('приосаниваются', 5),
  masculinePast: Word('приосанивался', 5),
  femininePast: Word('приосанивалась', 5),
  neuterPast: Word('приосанивалось', 5),
  pluralPast: Word('приосанивались', 5),
  imperativeInformal: Word('приосанивайся', 5),
  imperativeFormal: Word('приосанивайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(приосаниваться.name.text, приосаниваться);

export { приосаниваться };