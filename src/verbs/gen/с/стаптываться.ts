import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стаптываться: PerfectVerb = {
  name: Word('стаптываться', 2),
  singular1stPerson: Word('стаптываюсь', 2),
  singular2ndPerson: Word('стаптываешься', 2),
  singular3rdPerson: Word('стаптывается', 2),
  plural1stPerson: Word('стаптываемся', 2),
  plural2ndPerson: Word('стаптываетесь', 2),
  plural3rdPerson: Word('стаптываются', 2),
  masculinePast: Word('стаптывался', 2),
  femininePast: Word('стаптывалась', 2),
  neuterPast: Word('стаптывалось', 2),
  pluralPast: Word('стаптывались', 2),
  imperativeInformal: Word('стаптывайся', 2),
  imperativeFormal: Word('стаптывайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(стаптываться.name.text, стаптываться);

export { стаптываться };