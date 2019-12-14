import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стабилизироваться: PerfectVerb = {
  name: Word('стабилизироваться', 8),
  singular1stPerson: Word('стабилизируюсь', 8),
  singular2ndPerson: Word('стабилизируешься', 8),
  singular3rdPerson: Word('стабилизируется', 8),
  plural1stPerson: Word('стабилизируемся', 8),
  plural2ndPerson: Word('стабилизируетесь', 8),
  plural3rdPerson: Word('стабилизируются', 8),
  masculinePast: Word('стабилизировался', 8),
  femininePast: Word('стабилизировалась', 8),
  neuterPast: Word('стабилизировалось', 8),
  pluralPast: Word('стабилизировались', 8),
  imperativeInformal: Word('стабилизируйся', 8),
  imperativeFormal: Word('стабилизируйтесь', 8),
  imperfect: [],
};

perfectVerbs.set(стабилизироваться.name.text, стабилизироваться);

export { стабилизироваться };