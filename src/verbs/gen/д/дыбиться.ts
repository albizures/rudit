import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дыбиться: PerfectVerb = {
  name: Word('дыбиться', 1),
  singular1stPerson: Word('дыблюсь', 1),
  singular2ndPerson: Word('дыбишься', 1),
  singular3rdPerson: Word('дыбится', 1),
  plural1stPerson: Word('дыбимся', 1),
  plural2ndPerson: Word('дыбитесь', 1),
  plural3rdPerson: Word('дыбятся', 1),
  masculinePast: Word('дыбился', 1),
  femininePast: Word('дыбилась', 1),
  neuterPast: Word('дыбилось', 1),
  pluralPast: Word('дыбились', 1),
  imperativeInformal: Word('дыбься', 1),
  imperativeFormal: Word('дыбьтесь', 1),
  imperfect: [],
};

perfectVerbs.set(дыбиться.name.text, дыбиться);

export { дыбиться };