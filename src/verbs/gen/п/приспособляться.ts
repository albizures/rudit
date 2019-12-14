import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приспособляться: PerfectVerb = {
  name: Word('приспособляться', 10),
  singular1stPerson: Word('приспособляюсь', 10),
  singular2ndPerson: Word('приспособляешься', 10),
  singular3rdPerson: Word('приспособляется', 10),
  plural1stPerson: Word('приспособляемся', 10),
  plural2ndPerson: Word('приспособляетесь', 10),
  plural3rdPerson: Word('приспособляются', 10),
  masculinePast: Word('приспособлялся', 10),
  femininePast: Word('приспособлялась', 10),
  neuterPast: Word('приспособлялось', 10),
  pluralPast: Word('приспособлялись', 10),
  imperativeInformal: Word('приспособляйся', 10),
  imperativeFormal: Word('приспособляйтесь', 10),
  imperfect: [],
};

perfectVerbs.set(приспособляться.name.text, приспособляться);

export { приспособляться };