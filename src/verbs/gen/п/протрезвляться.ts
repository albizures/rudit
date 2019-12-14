import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const протрезвляться: PerfectVerb = {
  name: Word('протрезвляться', 9),
  singular1stPerson: Word('протрезвляюсь', 9),
  singular2ndPerson: Word('протрезвляешься', 9),
  singular3rdPerson: Word('протрезвляется', 9),
  plural1stPerson: Word('протрезвляемся', 9),
  plural2ndPerson: Word('протрезвляетесь', 9),
  plural3rdPerson: Word('протрезвляются', 9),
  masculinePast: Word('протрезвлялся', 9),
  femininePast: Word('протрезвлялась', 9),
  neuterPast: Word('протрезвлялось', 9),
  pluralPast: Word('протрезвлялись', 9),
  imperativeInformal: Word('протрезвляйся', 9),
  imperativeFormal: Word('протрезвляйтесь', 9),
  imperfect: [],
};

perfectVerbs.set(протрезвляться.name.text, протрезвляться);

export { протрезвляться };