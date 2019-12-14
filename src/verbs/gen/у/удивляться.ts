import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const удивляться: PerfectVerb = {
  name: Word('удивляться', 5),
  singular1stPerson: Word('удивляюсь', 5),
  singular2ndPerson: Word('удивляешься', 5),
  singular3rdPerson: Word('удивляется', 5),
  plural1stPerson: Word('удивляемся', 5),
  plural2ndPerson: Word('удивляетесь', 5),
  plural3rdPerson: Word('удивляются', 5),
  masculinePast: Word('удивлялся', 5),
  femininePast: Word('удивлялась', 5),
  neuterPast: Word('удивлялось', 5),
  pluralPast: Word('удивлялись', 5),
  imperativeInformal: Word('удивляйся', 5),
  imperativeFormal: Word('удивляйтесь', 5),
  imperfect: ['удивиться'],
};

perfectVerbs.set(удивляться.name.text, удивляться);

export { удивляться };