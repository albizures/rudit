import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уволиться: PerfectVerb = {
  name: Word('уволиться', 2),
  singular1stPerson: Word('уволюсь', 2),
  singular2ndPerson: Word('уволишься', 2),
  singular3rdPerson: Word('уволится', 2),
  plural1stPerson: Word('уволимся', 2),
  plural2ndPerson: Word('уволитесь', 2),
  plural3rdPerson: Word('уволятся', 2),
  masculinePast: Word('уволился', 2),
  femininePast: Word('уволилась', 2),
  neuterPast: Word('уволилось', 2),
  pluralPast: Word('уволились', 2),
  imperativeInformal: Word('уволься', 2),
  imperativeFormal: Word('увольтесь', 2),
  imperfect: [],
};

perfectVerbs.set(уволиться.name.text, уволиться);

export { уволиться };