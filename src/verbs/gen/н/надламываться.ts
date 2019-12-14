import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const надламываться: PerfectVerb = {
  name: Word('надламываться', 4),
  singular1stPerson: Word('надламываюсь', 4),
  singular2ndPerson: Word('надламываешься', 4),
  singular3rdPerson: Word('надламывается', 4),
  plural1stPerson: Word('надламываемся', 4),
  plural2ndPerson: Word('надламываетесь', 4),
  plural3rdPerson: Word('надламываются', 4),
  masculinePast: Word('надламывался', 4),
  femininePast: Word('надламывалась', 4),
  neuterPast: Word('надламывалось', 4),
  pluralPast: Word('надламывались', 4),
  imperativeInformal: Word('надламывайся', 4),
  imperativeFormal: Word('надламывайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(надламываться.name.text, надламываться);

export { надламываться };