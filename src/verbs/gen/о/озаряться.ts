import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const озаряться: PerfectVerb = {
  name: Word('озаряться', 4),
  singular1stPerson: Word('озаряюсь', 4),
  singular2ndPerson: Word('озаряешься', 4),
  singular3rdPerson: Word('озаряется', 4),
  plural1stPerson: Word('озаряемся', 4),
  plural2ndPerson: Word('озаряетесь', 4),
  plural3rdPerson: Word('озаряются', 4),
  masculinePast: Word('озарялся', 4),
  femininePast: Word('озарялась', 4),
  neuterPast: Word('озарялось', 4),
  pluralPast: Word('озарялись', 4),
  imperativeInformal: Word('озаряйся', 4),
  imperativeFormal: Word('озаряйтесь', 4),
  imperfect: [],
};

perfectVerbs.set(озаряться.name.text, озаряться);

export { озаряться };