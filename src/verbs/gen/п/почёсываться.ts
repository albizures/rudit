import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const почёсываться: PerfectVerb = {
  name: Word('почёсываться', 3),
  singular1stPerson: Word('почёсываюсь', 3),
  singular2ndPerson: Word('почёсываешься', 3),
  singular3rdPerson: Word('почёсывается', 3),
  plural1stPerson: Word('почёсываемся', 3),
  plural2ndPerson: Word('почёсываетесь', 3),
  plural3rdPerson: Word('почёсываются', 3),
  masculinePast: Word('почёсывался', 3),
  femininePast: Word('почёсывалась', 3),
  neuterPast: Word('почёсывалось', 3),
  pluralPast: Word('почёсывались', 3),
  imperativeInformal: Word('почёсывайся', 3),
  imperativeFormal: Word('почёсывайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(почёсываться.name.text, почёсываться);

export { почёсываться };