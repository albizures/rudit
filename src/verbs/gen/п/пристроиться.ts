import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пристроиться: PerfectVerb = {
  name: Word('пристроиться', 6),
  singular1stPerson: Word('пристроюсь', 6),
  singular2ndPerson: Word('пристроишься', 6),
  singular3rdPerson: Word('пристроится', 6),
  plural1stPerson: Word('пристроимся', 6),
  plural2ndPerson: Word('пристроитесь', 6),
  plural3rdPerson: Word('пристроятся', 6),
  masculinePast: Word('пристроился', 6),
  femininePast: Word('пристроилась', 6),
  neuterPast: Word('пристроилось', 6),
  pluralPast: Word('пристроились', 6),
  imperativeInformal: Word('пристройся', 6),
  imperativeFormal: Word('пристройтесь', 6),
  imperfect: [],
};

perfectVerbs.set(пристроиться.name.text, пристроиться);

export { пристроиться };