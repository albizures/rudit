import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перестараться: PerfectVerb = {
  name: Word('перестараться', 8),
  singular1stPerson: Word('перестараюсь', 8),
  singular2ndPerson: Word('перестараешься', 8),
  singular3rdPerson: Word('перестарается', 8),
  plural1stPerson: Word('перестараемся', 8),
  plural2ndPerson: Word('перестараетесь', 8),
  plural3rdPerson: Word('перестараются', 8),
  masculinePast: Word('перестарался', 8),
  femininePast: Word('перестаралась', 8),
  neuterPast: Word('перестаралось', 8),
  pluralPast: Word('перестарались', 8),
  imperativeInformal: Word('перестарайся', 8),
  imperativeFormal: Word('перестарайтесь', 8),
  imperfect: [],
};

perfectVerbs.set(перестараться.name.text, перестараться);

export { перестараться };