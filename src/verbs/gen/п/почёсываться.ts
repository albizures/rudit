import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const почёсываться: PerfectVerb = {
  name: Word('почёсываться', 7),
  singular1stPerson: Word('почёсываюсь', 7),
  singular2ndPerson: Word('почёсываешься', 7),
  singular3rdPerson: Word('почёсывается', 7),
  plural1stPerson: Word('почёсываемся', 7),
  plural2ndPerson: Word('почёсываетесь', 7),
  plural3rdPerson: Word('почёсываются', 7),
  masculinePast: Word('почёсывался', 7),
  femininePast: Word('почёсывалась', 7),
  neuterPast: Word('почёсывалось', 7),
  pluralPast: Word('почёсывались', 7),
  imperativeInformal: Word('почёсывайся', 7),
  imperativeFormal: Word('почёсывайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(почёсываться.name.text, почёсываться);

export { почёсываться };