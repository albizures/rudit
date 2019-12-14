import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сокрыться: PerfectVerb = {
  name: Word('сокрыться', 4),
  singular1stPerson: Word('сокроюсь', 4),
  singular2ndPerson: Word('сокроешься', 4),
  singular3rdPerson: Word('сокроется', 4),
  plural1stPerson: Word('сокроемся', 4),
  plural2ndPerson: Word('сокроетесь', 4),
  plural3rdPerson: Word('сокроются', 4),
  masculinePast: Word('сокрылся', 4),
  femininePast: Word('сокрылась', 4),
  neuterPast: Word('сокрылось', 4),
  pluralPast: Word('сокрылись', 4),
  imperativeInformal: Word('сокройся', 4),
  imperativeFormal: Word('сокройтесь', 4),
  imperfect: [],
};

perfectVerbs.set(сокрыться.name.text, сокрыться);

export { сокрыться };