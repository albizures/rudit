import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const порываться: PerfectVerb = {
  name: Word('порываться', 5),
  singular1stPerson: Word('порываюсь', 5),
  singular2ndPerson: Word('порываешься', 5),
  singular3rdPerson: Word('порывается', 5),
  plural1stPerson: Word('порываемся', 5),
  plural2ndPerson: Word('порываетесь', 5),
  plural3rdPerson: Word('порываются', 5),
  masculinePast: Word('порывался', 5),
  femininePast: Word('порывалась', 5),
  neuterPast: Word('порывалось', 5),
  pluralPast: Word('порывались', 5),
  imperativeInformal: Word('порывайся', 5),
  imperativeFormal: Word('порывайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(порываться.name.text, порываться);

export { порываться };