import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перемигиваться: PerfectVerb = {
  name: Word('перемигиваться', 5),
  singular1stPerson: Word('перемигиваюсь', 5),
  singular2ndPerson: Word('перемигиваешься', 5),
  singular3rdPerson: Word('перемигивается', 5),
  plural1stPerson: Word('перемигиваемся', 5),
  plural2ndPerson: Word('перемигиваетесь', 5),
  plural3rdPerson: Word('перемигиваются', 5),
  masculinePast: Word('перемигивался', 5),
  femininePast: Word('перемигивалась', 5),
  neuterPast: Word('перемигивалось', 5),
  pluralPast: Word('перемигивались', 5),
  imperativeInformal: Word('перемигивайся', 5),
  imperativeFormal: Word('перемигивайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(перемигиваться.name.text, перемигиваться);

export { перемигиваться };