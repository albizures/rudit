import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const озаботиться: PerfectVerb = {
  name: Word('озаботиться', 4),
  singular1stPerson: Word('озабочусь', 4),
  singular2ndPerson: Word('озаботишься', 4),
  singular3rdPerson: Word('озаботится', 4),
  plural1stPerson: Word('озаботимся', 4),
  plural2ndPerson: Word('озаботитесь', 4),
  plural3rdPerson: Word('озаботятся', 4),
  masculinePast: Word('озаботился', 4),
  femininePast: Word('озаботилась', 4),
  neuterPast: Word('озаботилось', 4),
  pluralPast: Word('озаботились', 4),
  imperativeInformal: Word('озаботься', 4),
  imperativeFormal: Word('озаботьтесь', 4),
  imperfect: [],
};

perfectVerbs.set(озаботиться.name.text, озаботиться);

export { озаботиться };