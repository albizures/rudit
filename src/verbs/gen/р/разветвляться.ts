import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разветвляться: PerfectVerb = {
  name: Word('разветвляться', 8),
  singular1stPerson: Word('разветвляюсь', 8),
  singular2ndPerson: Word('разветвляешься', 8),
  singular3rdPerson: Word('разветвляется', 8),
  plural1stPerson: Word('разветвляемся', 8),
  plural2ndPerson: Word('разветвляетесь', 8),
  plural3rdPerson: Word('разветвляются', 8),
  masculinePast: Word('разветвлялся', 8),
  femininePast: Word('разветвлялась', 8),
  neuterPast: Word('разветвлялось', 8),
  pluralPast: Word('разветвлялись', 8),
  imperativeInformal: Word('разветвляйся', 8),
  imperativeFormal: Word('разветвляйтесь', 8),
  imperfect: [],
};

perfectVerbs.set(разветвляться.name.text, разветвляться);

export { разветвляться };