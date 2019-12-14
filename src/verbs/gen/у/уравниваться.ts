import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уравниваться: PerfectVerb = {
  name: Word('уравниваться', 2),
  singular1stPerson: Word('уравниваюсь', 2),
  singular2ndPerson: Word('уравниваешься', 2),
  singular3rdPerson: Word('уравнивается', 2),
  plural1stPerson: Word('уравниваемся', 2),
  plural2ndPerson: Word('уравниваетесь', 2),
  plural3rdPerson: Word('уравниваются', 2),
  masculinePast: Word('уравнивался', 2),
  femininePast: Word('уравнивалась', 2),
  neuterPast: Word('уравнивалось', 2),
  pluralPast: Word('уравнивались', 2),
  imperativeInformal: Word('уравнивайся', 2),
  imperativeFormal: Word('уравнивайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(уравниваться.name.text, уравниваться);

export { уравниваться };