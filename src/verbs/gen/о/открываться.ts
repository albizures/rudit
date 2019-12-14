import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const открываться: PerfectVerb = {
  name: Word('открываться', 6),
  singular1stPerson: Word('открываюсь', 6),
  singular2ndPerson: Word('открываешься', 6),
  singular3rdPerson: Word('открывается', 6),
  plural1stPerson: Word('открываемся', 6),
  plural2ndPerson: Word('открываетесь', 6),
  plural3rdPerson: Word('открываются', 6),
  masculinePast: Word('открывался', 6),
  femininePast: Word('открывалась', 6),
  neuterPast: Word('открывалось', 6),
  pluralPast: Word('открывались', 6),
  imperativeInformal: Word('открывайся', 6),
  imperativeFormal: Word('открывайтесь', 6),
  imperfect: ['открыться'],
};

perfectVerbs.set(открываться.name.text, открываться);

export { открываться };