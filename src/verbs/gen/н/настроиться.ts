import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const настроиться: PerfectVerb = {
  name: Word('настроиться', 5),
  singular1stPerson: Word('настроюсь', 5),
  singular2ndPerson: Word('настроишься', 5),
  singular3rdPerson: Word('настроится', 5),
  plural1stPerson: Word('настроимся', 5),
  plural2ndPerson: Word('настроитесь', 5),
  plural3rdPerson: Word('настроятся', 5),
  masculinePast: Word('настроился', 5),
  femininePast: Word('настроилась', 5),
  neuterPast: Word('настроилось', 5),
  pluralPast: Word('настроились', 5),
  imperativeInformal: Word('настройся', 5),
  imperativeFormal: Word('настройтесь', 5),
  imperfect: [],
};

perfectVerbs.set(настроиться.name.text, настроиться);

export { настроиться };