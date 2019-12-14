import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перестраховываться: PerfectVerb = {
  name: Word('перестраховываться', 9),
  singular1stPerson: Word('перестраховываюсь', 9),
  singular2ndPerson: Word('перестраховываешься', 9),
  singular3rdPerson: Word('перестраховывается', 9),
  plural1stPerson: Word('перестраховываемся', 9),
  plural2ndPerson: Word('перестраховываетесь', 9),
  plural3rdPerson: Word('перестраховываются', 9),
  masculinePast: Word('перестраховывался', 9),
  femininePast: Word('перестраховывалась', 9),
  neuterPast: Word('перестраховывалось', 9),
  pluralPast: Word('перестраховывались', 9),
  imperativeInformal: Word('перестраховывайся', 9),
  imperativeFormal: Word('перестраховывайтесь', 9),
  imperfect: [],
};

perfectVerbs.set(перестраховываться.name.text, перестраховываться);

export { перестраховываться };