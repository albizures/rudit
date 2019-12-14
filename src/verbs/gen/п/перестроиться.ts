import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перестроиться: PerfectVerb = {
  name: Word('перестроиться', 7),
  singular1stPerson: Word('перестроюсь', 7),
  singular2ndPerson: Word('перестроишься', 7),
  singular3rdPerson: Word('перестроится', 7),
  plural1stPerson: Word('перестроимся', 7),
  plural2ndPerson: Word('перестроитесь', 7),
  plural3rdPerson: Word('перестроятся', 7),
  masculinePast: Word('перестроился', 7),
  femininePast: Word('перестроилась', 7),
  neuterPast: Word('перестроилось', 7),
  pluralPast: Word('перестроились', 7),
  imperativeInformal: Word('перестройся', 7),
  imperativeFormal: Word('перестройтесь', 7),
  imperfect: [],
};

perfectVerbs.set(перестроиться.name.text, перестроиться);

export { перестроиться };