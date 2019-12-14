import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const достроиться: PerfectVerb = {
  name: Word('достроиться', 5),
  singular1stPerson: Word('достроюсь', 5),
  singular2ndPerson: Word('достроишься', 5),
  singular3rdPerson: Word('достроится', 5),
  plural1stPerson: Word('достроимся', 5),
  plural2ndPerson: Word('достроитесь', 5),
  plural3rdPerson: Word('достроятся', 5),
  masculinePast: Word('достроился', 5),
  femininePast: Word('достроилась', 5),
  neuterPast: Word('достроилось', 5),
  pluralPast: Word('достроились', 5),
  imperativeInformal: Word('достройся', 5),
  imperativeFormal: Word('достройтесь', 5),
  imperfect: [],
};

perfectVerbs.set(достроиться.name.text, достроиться);

export { достроиться };