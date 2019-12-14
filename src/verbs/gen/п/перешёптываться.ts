import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перешёптываться: PerfectVerb = {
  name: Word('перешёптываться', 10),
  singular1stPerson: Word('перешёптываюсь', 10),
  singular2ndPerson: Word('перешёптываешься', 10),
  singular3rdPerson: Word('перешёптывается', 10),
  plural1stPerson: Word('перешёптываемся', 10),
  plural2ndPerson: Word('перешёптываетесь', 10),
  plural3rdPerson: Word('перешёптываются', 10),
  masculinePast: Word('перешёптывался', 10),
  femininePast: Word('перешёптывалась', 10),
  neuterPast: Word('перешёптывалось', 10),
  pluralPast: Word('перешёптывались', 10),
  imperativeInformal: Word('перешёптывайся', 10),
  imperativeFormal: Word('перешёптывайтесь', 10),
  imperfect: [],
};

perfectVerbs.set(перешёптываться.name.text, перешёптываться);

export { перешёптываться };