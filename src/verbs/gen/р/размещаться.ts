import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const размещаться: PerfectVerb = {
  name: Word('размещаться', 6),
  singular1stPerson: Word('размещаюсь', 6),
  singular2ndPerson: Word('размещаешься', 6),
  singular3rdPerson: Word('размещается', 6),
  plural1stPerson: Word('размещаемся', 6),
  plural2ndPerson: Word('размещаетесь', 6),
  plural3rdPerson: Word('размещаются', 6),
  masculinePast: Word('размещался', 6),
  femininePast: Word('размещалась', 6),
  neuterPast: Word('размещалось', 6),
  pluralPast: Word('размещались', 6),
  imperativeInformal: Word('размещайся', 6),
  imperativeFormal: Word('размещайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(размещаться.name.text, размещаться);

export { размещаться };